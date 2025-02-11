# Part 4

## Problems

To determine the most potential user, we prioritize:

1. Total Average Weighted Ratings (highest priority)
2. Number of Rents
3. Recent Activity

The query should return results in the following order: User A → User B → User C

## Solution

In order to efficiently retrieve the highest potential users, the following is the solution:

**1. Firestore Index Configuration**

We need to implement a composite index in Firestore or define it locally in`firestore.indexes.json`:

```
{
  "indexes": [
    {
      "collectionGroup": "users",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "totalAverageWeightRatings",
          "order": "DESCENDING"
        },
        {
          "fieldPath": "numberOfRents",
          "order": "DESCENDING"
        },
        {
          "fieldPath": "recentlyActive",
          "order": "DESCENDING"
        }
      ]
    }
  ]
}
```

**2. Query Implementation**

The following `Node.js` query retrieves the highest potential users:

```
collection
  .orderBy('totalAverageWeightRatings', 'desc')
  .orderBy('numberOfRents', 'desc')
  .orderBy('recentlyActive', 'desc')
  .startAfter(lastDoc)
  .limit(pageSize)
```

**Explanation**

- `orderBy`: Ensures sorting based on the given priorities, totalAverageWeightRatings -> numberOfRents -> recentlyActive
- `startAfter(lastDoc)`: Supports pagination by retrieving the next set of data based on the last document from the previous query
- `limit(pageSize)`: Limits the number of retrieved documents per page for efficient pagination
