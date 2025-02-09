import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { useTheme } from "@/theme/ThemeContext";
import { Themes, themeKeys } from "@/theme/themes";

export const ThemeSwitcher = () => {
  const { currentTheme, changeTheme } = useTheme();

  return (
    <FormControl>
      <FormLabel id="demo-theme-toggle">Theme</FormLabel>
      <RadioGroup
        aria-labelledby="demo-theme-toggle"
        name="theme-toggle"
        row
        value={currentTheme}
        onChange={(event) => changeTheme(event.target.value as Themes)}
      >
        {themeKeys.map((themeKey) => {
          return (
            <FormControlLabel
              sx={{
                textTransform: "capitalize",
              }}
              key={themeKey}
              value={themeKey}
              control={<Radio />}
              label={themeKey}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
