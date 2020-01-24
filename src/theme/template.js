export const template = {
  mobile: {
    rows: "56px 56px auto",
    columns: "auto",
    area: ` 
   "header "
   "sidebar"   
   "main"
   `
  },
  tablet: {
    rows: "10% auto auto 10%",
    columns: "20% auto auto auto",
    area: ` 
   "sidebar header header header"
   "sidebar main main main"
   "sidebar main main main"
   "sidebar main main main"  
   `
  },
  desktop: {
    rows: "10% auto 10%",
    columns: "20% auto auto auto auto",
    area: ` 
   "header main main main main"
   "sidebar main main main main"
   "sidebar main main main main"
   `
  }
};
