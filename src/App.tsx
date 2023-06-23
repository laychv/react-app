import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["CN", "CA", "USA"];
  // const handleSeletedItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="countries"
  //       onSelectedItem={handleSeletedItem}
  //     />
  //   </div>
  // );

  return (
    <div>
      <Alert>
        <span>this is a child!</span>
      </Alert>
    </div>
  );
}

export default App;
