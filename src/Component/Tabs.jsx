

const Tabs = ({ activeTab, setActiveTab, carts }) => {


    return (
        <div>
            <div className="tabs tabs-box justify-center bg-transparent mt-5">
                <input onClick={() => setActiveTab("products")}
                    type="radio" name="my_tabs_1" className={`tab rounded-full ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""} w-30`} aria-label="Products" defaultChecked />


                <input onClick={() => setActiveTab("cart")}
                    type="radio" name="my_tabs_1" className={`tab  rounded-full w-30 ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`} aria-label={`Cart (${carts.length})`} />
            </div>

        </div>
    );
};

export default Tabs;