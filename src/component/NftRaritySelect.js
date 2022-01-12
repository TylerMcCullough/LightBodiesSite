import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const NftSelect = (props) => {
  const { options, setType, info } = props;
  const [age, setAge] = React.useState(options[0].label);
  const handleChange = (e) => {
    setType({ ...info, rarity: e.target.value });
    setAge(e.target.value);
  };
  return (
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value={age}
      onChange={handleChange}
      input={<BootstrapInput />}
    >
      {options.map((option, key) => {
        return (
          <MenuItem
            value={option.value}
            key={`option-${key}`}
            className="menu-item"
          >
            {option.label}
          </MenuItem>
        );
      })}
    </Select>
  );
};
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "9px 11px",
    width: "95%",
    fontFamily: "Amulet",
    color: "white",
  },
}));
export default NftSelect;
