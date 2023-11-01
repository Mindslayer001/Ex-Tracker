import { MouseEvent, useState } from "react";
import styled from  'styled-components'


interface ListSelectionProps{
  active: boolean;
}

const List = styled.ul`
list-style:none;
padding: 0;
`
const ListItem  =  styled.li<ListSelectionProps>`
padding: 5px 0;
background: ${[  props => props.active ? 'red' :  'none'  ]}
`
interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      <List className="list-group" style={{
        backgroundColor: 'yellow'
      }}>
        {items.map((item, index) => (
          <ListItem
            active={index ===  selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
