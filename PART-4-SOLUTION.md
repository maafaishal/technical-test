# Part 4

## Problems

To determine the most potential user, we prioritize:

1. Total Average Weighted Ratings (highest priority)
2. Number of Rents
3. Recent Activity

The query should return results in the following order: User A → User B → User C

## Solution

To efficiently retrieve the highest potential users, we can borrow the concept of scoring in football, where match results (win, draw, lose) are given different weight points (3,1,0).

The formula for scoring:
```
finalScore = (totalWin * 3) + (totalDraw * 1) + (totalLose * 0)
```

We can adapt this by weighting each metric (`totalAverageWeightRatings`, `numberOfRents`, `recentlyActive`) and using weight points (10000-100-1, 100-10-1, 10-5-1, etc.). For example, we might use 10000-100-1 weight points.

```
potentialScore = (totalAverageWeightRatings * 10000) + (numberOfRents * 100) + recentlyActive
```

To determine which weight points are the best, the company can experiment with sample data (100 users, 1000 users, or etc.) and check combination matches their preferences.


### Query Implementation

**1. Calculate the `potentialScore` field**

Whenever users are added or updated, we need to calculate "potentialScore" based on the lastest values (`totalAverageWeightRatings`, `numberOfRents`, `recentlyActive`).

**Add Query:**

```
  const totalAverageWeightRatings = 4.3
  const numberOfRents = 30
  const recentlyActive = Date.now()

 collection.add({
    totalAverageWeightRatings,
    numberOfRents,
    recentlyActive,
    potentialScore: (totalAverageWeightRatings * 10000) + (numberOfRents * 100) + recentlyActive
  });
```

**Update Query:**

```
  const updatedData = {
    totalAverageWeightRatings : 4.3
    numberOfRents: 30
    recentlyActive: Date.now()
  }

  collection.update({
    ...updatedData,
    potentialScore: (updatedData.totalAverageWeightRatings * 10000) + (updatedData.numberOfRents * 100) + updatedData.recentlyActive
  });
```

Then, to retrieve the data with pagination, use the following query:

```
collection
  .orderBy('potentialScore', 'desc')
  .startAfter(lastDoc)
  .limit(pageSize)
```

**Explanation**

- `orderBy`: Ensures sorting based on the potential score result
- `startAfter(lastDoc)`: Supports pagination by retrieving the next set of data based on the last document from the previous query
- `limit(pageSize)`: Limits the number of retrieved documents per page for efficient pagination

**2. Keep `recentlyActive` up-to-date**

To ensure the `recentlyActive` field in a Firestore document remains updated, here are the strategies

- First, provide an API specfically to update the `recentlyActive` field, or use `updateUserData` API
- Next, trigger the API when users leave or close the page/tab using `visibilitychange` event listener
- Lastly, utilize `Debounce`. This ensures that we track the last user action after a short delay, preventing multiple API calls from user interactions
