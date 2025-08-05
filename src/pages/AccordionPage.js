import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "fsfdsfjls",
      label: "Item 1 Item 1 Item 1",
      content:
        "Content for item 1Content for item 1Content for item 1Content for item 1Content for item 1Content for item 1",
    },
    {
      id: "uiqew",
      label: "Item 2 Item 2 Item 2",
      content:
        "Content for item 2Content for item 2Content for item 2Content for item 2Content for item 2Content for item 2",
    },
    {
      id: "whwqas",
      label: "Item 3 Item 3 Item 3",
      content:
        "Content for item 3Content for item 3Content for item 3Content for item 3Content for item 3Content for item 3",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
