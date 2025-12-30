import { useState } from "react";

// Joy UI
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";

// Icon (lucide-react)
import { Menu } from "lucide-react";

const sections = ["accueil", "profil", "experiences", "projets", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800/90 backdrop-blur-md z-50 shadow-lg overflow-x-hidden">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* LOGO */}
        <button
          onClick={() => scrollToSection("accueil")}
          className="text-white font-bold text-2xl cursor-pointer"
        >
          <span className="font shadow-xl">Claudy</span><span className="text-sky-700 accent">Corne</span>
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-4">
          {sections.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-white px-3 py-2 rounded-lg hover:text-sky-500 hover:bg-gray-900 transition cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* MENU MOBILE (JOY UI DRAWER) */}
        <div className="md:hidden">
          <IconButton
          variant="outlined"
          onClick={() => setOpen(true)}
          sx={{
            position: "absolute",
            top: 24,      // décalage depuis le haut
            right: 20,
            color: "white",
            borderColor: "white",
            "&:hover": {
              backgroundColor: "rgba(55,55,255,0.08)",
              borderColor: "white",
            },
          }}
        >
          <Menu color="white" />
        </IconButton>

          <Drawer
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            zIndex: 2000,
            "& .MuiDrawer-content": {
              width: 300,          // largeur fixe
              maxWidth: "90%",
              backgroundColor: "#020617", // équivalent tailwind gray-950
              color: "blue",
                },
              }}
            >

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: "auto",
                mt: 1,
                mr: 2,
              }}
            >
              <Typography level="body-sm" sx={{ color: "white", fontWeight: "bold"}}>
                Fermer
                </Typography>
              <ModalClose sx={{ position: "initial", color: "white" }} />
            </Box>

            <List
              size="lg"
              sx={{
                mt: 4,
                fontSize: "lg",
              }}
            >
              {sections.map((item) => (
                <ListItemButton
                  sx={{
                    color: "white", // texte blanc
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                  key={item}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
