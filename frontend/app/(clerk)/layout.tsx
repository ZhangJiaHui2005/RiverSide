import { Pacifico } from "next/font/google";

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
 return ( <div className="h-screen flex items-center justify-center">
  {children}
 </div> );
}
 
export default ClerkLayout;