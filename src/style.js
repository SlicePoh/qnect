
const styles = {
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexBetween: "flex justify-between items-center",
    
    flexSS: "flex justify-start items-center",


    borderNorm: "border-solid border-2 border-slate-100 rounded-full",
    borderS: "border-solid border-2 border-slate-100 rounded-lg",
    anal: " dark ml-28 w-8/12 dark:bg-slate-800 dark:text-white ",
    
    side: " dark float-right bg-gray-100 dark:bg-slate-900 bottom-0 top-16 right-0 fixed  h-screen w-3/12",
    
    navHead: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 text-slate-400",
    navEnd: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 ",

    divVer: "border-r-4 border-gray-200 h-screen p-4",
    divHor: "border-b-4 border-gray-200 ",
};
  
export const layout = {

    menu: `dark ${styles.flexBetween} flex-col float-left bottom-0 left-0 fixed w-1/9 text-slate-400 dark:bg-slate-800 dark:text-white`,
    bord: `mx-4 ${styles.flexCenter} ${styles.borderS} p-1 text-sm`,

    sideB: `${styles.side} flex flex-col justify-between items-center`,
};
  
export default styles;