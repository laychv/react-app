function Message() {
  const isTitle = "gaga";
  if (isTitle) {
    return <h1> Hello {isTitle}</h1>;
  }
  return <h1>Hello React</h1>;
}

export default Message;
