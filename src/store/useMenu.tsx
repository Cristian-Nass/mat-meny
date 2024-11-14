import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { database } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

interface MenuDataItemsType {
  title: string;
  price: string;
  ingredients: string;
}

interface MenuDataType {
  category: string;
  items: MenuDataItemsType[];
}

interface MenuData {
  name: string;
  menu: MenuDataType[];
}

interface MenuState {
  data: MenuData | undefined;
  getData: () => Promise<void>;
  name: string;
}

const useMenu = create<MenuState>()(
  devtools(
    (set) => ({
      data: undefined,
      name: "",
      getData: async () => {
        try {
          const docRef = doc(
            database,
            "tradgarden-uppsala",
            "NtHLwkebv0LemhDNGyN5"
          );
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            set({
              data: docSnap.data() as MenuData,
              name: docSnap.data().name,
            });
          }
        } catch (error) {
          console.error("Error fetching menu data:", error);
        }
      },
    }),
    {
      name: "Menu Store",
    }
  )
);

export default useMenu;
