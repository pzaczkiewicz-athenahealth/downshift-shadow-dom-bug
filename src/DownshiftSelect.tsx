import * as React from "react";
import { useSelect } from "downshift";

const colors = [
  "Black",
  "Red",
  "Green",
  "Blue",
  "Orange",
  "Purple",
  "Pink",
  "Orchid",
  "Aqua",
  "Lime",
  "Gray",
  "Brown",
  "Teal",
  "Skyblue",
];

export default function DropdownSelect() {
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items: colors });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        justifyContent: "center",
        marginTop: 100,
        alignSelf: "center",
      }}
    >
      <label
        style={{
          fontWeight: "bolder",
          color: selectedItem ? selectedItem : "black",
        }}
        {...getLabelProps()}
      >
        Choose an element:
      </label>
      <div
        style={{
          padding: "4px",
          textAlign: "center",
          border: "1px solid black",
          backgroundColor: "lightgray",
          cursor: "pointer",
        }}
        {...getToggleButtonProps()}
      >
        {selectedItem ?? "Elements"}
        {isOpen ? <>&#8593;</> : <>&#8595;</>}
      </div>
      <ul
        {...getMenuProps()}
        style={{
          listStyle: "none",
          width: "100%",
          padding: "0",
          margin: "4px 0 0 0",
        }}
      >
        {isOpen &&
          colors.map((item, index) => (
            <li
              style={{
                padding: "4px",
                backgroundColor:
                  highlightedIndex === index ? "#bde4ff" : undefined,
              }}
              key={`${item}${index}`}
              {...getItemProps({
                item,
                index,
              })}
            >
              <button onClick={() => setSelectedItem(item)}>{item}</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
