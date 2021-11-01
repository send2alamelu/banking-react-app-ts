export default interface DropdownProps {
  label: string;
  items: {
    value: string;
    label: string;
  }[],
  onChange: Function
}