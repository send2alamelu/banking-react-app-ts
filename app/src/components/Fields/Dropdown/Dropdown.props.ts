export interface DropdownItem {
  value: string;
  label: string;
}[]

export interface DropdownProps {
  label: string;
  items: DropdownItem[],
  onChange: Function
}