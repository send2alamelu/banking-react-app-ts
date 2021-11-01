import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BlockProps from './Block.props';

export default function Block(props: BlockProps) {
  return (
    <Card>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}
