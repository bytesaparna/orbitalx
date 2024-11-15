import { OrganizationSwitcher,} from "@clerk/nextjs";
import { FC } from "react";
import DashboradSearchBar from "./DashboradSearchBar";
import { SidebarTrigger } from "../ui/sidebar";


const DashboardNavbar: FC = () => {
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-1 bg-transparent z-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:border border-white/15 md:p-4 rounded-xl max-w-4xl mx-auto bg-black/50 backdrop-blur-sm">
                    {/*Search bar and SidebarTrigger in the same row for smaller devices */}
                    <div className="flex flex-row items-center justify-between w-full">
                        <DashboradSearchBar />
                        <div className="flex items-center justify-center md:hidden">
                            <SidebarTrigger />
                        </div>
                    </div>
                    {/*Organization switcher by clerk */}
                    <div className="hidden md:flex bg-gradient-to-r from-[#371e51] to-[#00060c] rounded-lg p-1 border border-background-white text-white focus:outline-none">
                        <OrganizationSwitcher
                            afterCreateOrganizationUrl={"/organization/:id"}
                            afterLeaveOrganizationUrl="/organization/:id"
                            afterSelectOrganizationUrl={"/organization/:id"}
                            afterSelectPersonalUrl={"/organization/:id"}
                            appearance={{
                                elements: {
                                    rootBox: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textDecorationColor:"white",
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;