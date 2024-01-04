export const testGroup = 
    {
      id: "parent_group1",
      type: "group",
      data: {
        label: "parent 1"
      },
      position: {
        x: 250,
        y: 250
      },
      style: {
        width: 200,
        height: 200
      }
    }
 export const testGroup2 =   
    {
      id: "child1_group1",
      type: "textUpdatercustom",
      data: { label: "child node 1" },
      position: { x: 10, y: 10 },
      parentNode: "parent_group1",
      extent: "parent"
    }