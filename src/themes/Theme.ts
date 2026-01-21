export const Theme = {
  card: {
    defaultProps: {
      className:
        "rounded-2xl bg-[rgba(50,50,50,0.55)] backdrop-blur-xl border border-[rgba(13,115,119,0.45)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
    },
  },
  typography: {
    defaultProps: {
      color: "inherit",
    },
    valid: {
      colors: ["inherit", "white", "title", "lead", "paragraph", "small"],
    },
    styles: {
      colors: {
        inherit: {
          color: "text-[#899aab]",
        },
        white: {
          color: "text-white",
        },
        title: {
          color: "text-[#F1F5F9]",
        },
        lead: {
          color: "text-[#C7CDD4]",
        },
        paragraph: {
          color: "text-[#D1D5DB]",
        },
        small: {
          color: "text-[#9CA3AF]",
        },
      },
    },
  },
  tabs: {
    defaultProps: {
      className: "",
      orientation: "horizontal",
    },
    styles: {
      base: {
        overflow: "overflow-hidden",
      },
      horizontal: { display: "block" },
      vertical: { display: "flex" },
    },
  },

  tabsHeader: {
    defaultProps: {
      className: "",
    },
    styles: {
      base: {
        display: "flex",
        position: "relative",
        bg: "bg-[rgba(33,33,33,0.42)]",
        borderRadius: "rounded-2xl",
        p: "p-2",
        border: "border border-[rgba(13,115,119,0.22)]",
        backdrop: "backdrop-blur-xl",
      },
      horizontal: { flexDirection: "flex-row" },
      vertical: { flexDirection: "flex-col" },
    },
  },

  tab: {
    defaultProps: {
      className: "",
      activeClassName: "",
      disabled: false,
    },
    styles: {
      base: {
        display: "grid place-items-center",
        width: "w-full",
        textAlign: "text-center",
        userSelect: "select-none",
        cursor: "cursor-pointer",
        p: "px-4 py-2",
        borderRadius: "rounded-xl",
        transition: "transition-all duration-200",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-medium",
        lineHeight: "leading-none",
        hover: "hover:bg-white/5 hover:text-white",
      },
      label: {
        color: "text-white/70 hover:text-white hover:bg-white/5",
      },
      active: {
        color: "text-[#212121]",
        fontWeight: "font-semibold",
      },
      indicator: {
        position: "absolute",
        inset: "inset-0",
        zIndex: "z-0",
        bg: "bg-[rgba(20,255,236,0.18)]",
        borderRadius: "rounded-xl",
        border: "border border-[rgba(20,255,236,0.22)]",
        shadow: "shadow-[0_10px_25px_rgba(0,0,0,0.35)]",
      },
    },
  },
};
