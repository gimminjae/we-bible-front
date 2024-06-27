import React, { useMemo } from "react";

type Props = {
  type: "Solid" | "Outline" | "Ghost" | "Soft" | "White" | "Link";
  size: "Small" | "Default" | "Large";
  color: string;
  shape: string;
  icon: string;
  disabled: boolean;
};
function Button({ type, size, color, shape, icon, disabled }: Props) {
  const btnType = useMemo(() => {
    switch (
      type
      // "Solid" => ""
    ) {
    }
  }, []);
  return <></>;
}
