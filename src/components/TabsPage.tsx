import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Stack } from "@mui/material";

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      className={`${
        props.selected ? "!bg-[#7c6ef6] !text-[#ebe9fe]" : ""
      }  !rounded-xl !my-2 !mx-4 !p-2 !text-[#767e94] !font-bold`}
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

export default function TabsPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Stack
      className="w-[360px] h-[50px] my-10 border-none"
      visibility={"visible"}
      sx={{ "MuiBox-root": "width:auto !important" }}
    >
      <Box
        sx={{ width: "100%", background: "#00000033", borderRadius: "12px" }}
      >
        <Tabs
          sx={{ display: "flex" }}
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
          TabIndicatorProps={{
            style: { display: "none" },
          }}
        >
          <LinkTab label="All" href="/" />
          <LinkTab label="Movies" href="/" />
          <LinkTab label="Series" href="/" />
        </Tabs>
      </Box>
    </Stack>
  );
}
