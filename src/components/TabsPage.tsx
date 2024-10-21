import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TabsPage = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname === "/series" ? 1 : 0);

  return (
    <div className="flex justify-center items-center text-lg border-[2px] border-solid border-[#20283e] rounded-lg focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-none w-52 h-14 my-3">
      <Stack className=" text-[#61697f]" direction="row" spacing={2}>
        <Typography>
          <Link className="font-extrabold" to={"/"}>
            <Button
              onClick={() => setValue(0)}
              variant={value === 0 ? "contained" : "text"}
            >
              MOVIES
            </Button>
          </Link>
        </Typography>
        <Typography>
          <Link to={"/series"}>
            <Button
              onClick={() => {
                setValue(1);
              }}
              variant={value === 1 ? "contained" : "text"}
            >
              SERIES
            </Button>
          </Link>
        </Typography>
      </Stack>
    </div>
  );
};

export default TabsPage;
