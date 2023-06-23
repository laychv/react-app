# start react app

## creating react app

1. setup environment
- vscode
- vscode - plugings - prettier
- vscode - settings - format on save
- vscode - es7+
- brew install node

2. creating a react app
- npm create vite@4.1.0
- Project name: react-app
- Ok to proceed?: y
- Select a framework: React
- Select a variant: TypeScript
  
3. run react-app 
- cd react-app
- npm i
- npm run dev

4. using bootstrap style
- npm i bootstrap@5.2.3


## handling event

- onClick

```
import { Fragment, useState } from "react";
import { MouseEvent } from "react";

function HandleEvent() {
    const item = ["CN", "CA", "USA"];
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <Fragment>
        <h1>gaga</h1>
        <ul className="list-group">
            {item.map((item, index) => (
            <li
                className="list-group-item"
                onClick={handleClick}
            >
                {item}
            </li>
            ))}
        </ul>
        </Fragment>
  ); 
}

onClick()

```

## managing state

- useState

```
import { Fragment, useState } from "react";

function ListGroup() {
    const item = ["CN", "CA", "USA"];
    const [selectedIndex, setSelectedIndexs] = useState(-1);

    return (
        <Fragment>
        <h1>gaga</h1>
        <ul className="list-group">
            {item.map((item, index) => (
            <li
                className={
                selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item}
                onClick={() => setSelectedIndexs(index)}
            >
                {item}
            </li>
            ))}
        </ul>
        </Fragment>
  );
}

```


## passing data via props

- use interface

ListGroup.tsx

```
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;// add this
}

function ListGroup({ items, heading, onSelectedItem }: Props) {// add this
  const [selectedIndex, setSelectedIndexs] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndexs(index);
              onSelectedItem(item);// add this
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
```

App.tsx

```
function App() {
  let items = ["CN", "CA", "USA"];// warning cannot use const, otherwise show an error.

  const handleSeletedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="countries"
        onSelectedItem={handleSeletedItem}// add this
      />
    </div>
  );
}
```

## passing children

- interface
- ReactNode (deprecated)
- ReactElement

Alert.tsx

```
import React, {ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

```

App.tsx

```
function App() {
  return (
    <div>
      <Alert>
        <span>this is a child!</span>
      </Alert>
    </div>
  );
}
```

## vscode hot keys
- command + D


see link from 
https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh