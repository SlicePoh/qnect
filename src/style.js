
const styles = {
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexBetween: "flex justify-between items-center",
    
    flexSS: "flex justify-start items-center",
    flexBB: "flex justify-center items-start",

    icon: "text-white text-3xl mr-4 ",
    icon2: "text-white text-3xl mr-2 ",

    borderNorm: "border-solid border-2 border-slate-100 rounded-full",
    borderS: "border-solid border-2 border-slate-100 rounded-lg",
    anal: " dark ml-28 w-8/12 dark:bg-slate-800 dark:text-white ",
    
    right_side: "float-right bottom-20 top-20 right-0 fixed  h-screen w-72",
    left_side: "float-left bottom-20 top-20 left-0 fixed h-screen w-72 py-6",

    hero: "flex-col bg-dark-3 h-screen w-full",
    
    navHead: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 text-slate-400",
    navEnd: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 ",

    divVerL: "border-x-2 border-biege h-screen p-4",
    divVerR: "border-x-2 border-biege h-screen p-4",
    divHor: "border-b-2 border-beige ",
};
  
export const layout = {
    left_bar: ` ${styles.flexSS} bg-dark-1 flex-col ${styles.left_side}`,
    right_bar: `${styles.right_side} ${styles.flexBetween} flex-col`,

    footer: `${styles.flexBetween} bg-dark-1 h-20 w-full bottom-0 fixed ${styles.divHor} `,
    navbar: `${styles.flexBetween} bg-dark-1 h-20 w-auto sticky px-8  `,

    hero: `${styles.flexSS} ${styles.hero} flex-col `,
    ask: `${styles.flexCenter} rounded-lg bg-dark-1 w-7/12 h-20 mt-8 mb-2 `,
    ans: `${styles.flexCenter} rounded-lg bg-dark-1 w-7/12 h-80 my-2 `,

    route: ` ${styles.flexSS} w-72 h-16 px-8 text-beige text-xl hover:bg-rose-2 hover:w-[300px] hover:text-white hover:border-r-8 hover:border-rose-1 `,
    //bord: `mx-4 ${styles.flexCenter} ${styles.borderS} p-1 text-sm `,
};
  
export default styles;