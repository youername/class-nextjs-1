import DropdownMenu from "@/components/dropdownMenu";
import { TglButton } from "@tonglecoding/next-ui-kit";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div style={{ position: "relative", border: "solid 1px red" }}>
          <TglButton paddingX="12px" bgColor="light" rounded="md">
            click
          </TglButton>

          <DropdownMenu />
        </div>
      </div>
    </div>
  );
}
