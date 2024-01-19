import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { styled } from "@mui/material/styles";
import styles from "../../styles/header.module.css";
import { useRouter } from "next/router";

const drawerWidth = 240;

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const productArray = [
    {
      productKey: "Products",
      productNamme: "MINI SPLIT INVERTER HEAT PUMPS",
    },
    { productKey: "", productNamme: "MULTIZONE INVERTER HEAT PUMPS" },
    {
      productKey: "",
      productNamme: "AIR HANDLER UNIT INVERTER HEAT PUMPS",
    },
    { productKey: "SpareParts", productNamme: "SPARE PARTS" },
  ];

  const partnerArray = [
    {
      partnerKey: "BecomeaPartner",
      partnerNamme: "Become A Partner",
    },
    {
      partnerKey: "PartnerCenter",
      partnerNamme: "Partner Center",
    },
  ];

  const warrantyArray = [
    {
      warrantyKey: "MiniSplitIndor",
      warrantyNamme: "Mini Split Inverter Heat Pumps",
      warrantyList: [
        { name: "Mini Split InDoor", key: "MiniSplitIndor" },
        { name: "Mini Split OutDoor", key: "MiniSplitoutdor" },
      ],
    },
    {
      warrantyKey: "MiniSplitIndor",
      warrantyNamme: "Multi-Zone Inverter Heat Pumps",
      warrantyList: [{ name: "Multi Zone OutDoor", key: "MiniSplitoutdor" }],
    },
    {
      warrantyKey: "",
      warrantyNamme: "Air Handler Unit Inverter Heat Pumps",
      warrantyList: [
        { name: "Air Handler InDoor", key: "MiniSplitIndor" },
        { name: "Air Handler OutDoor", key: "MiniSplitoutdor" },
      ],
    },
    {
      warrantyKey: "WarrantyRegistration",
      warrantyNamme: "Warranty Registration",
      warrantyList: [],
    },
  ];

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuList = [
    { text: "Home", key: "" },
    { text: "About Us", key: "aboutus" },
    { text: "Products", key: "Products" },
    { text: "Partners", key: "BecomeaPartner" },
    { text: "Warranty", key: "warrantyRegistration" },
    { text: "Downloads", key: "downloads" },
    { text: "Contact Us", key: "contact" },
  ];

  return (
    <div>
      <div className={styles.logoContainer}>
        <div className={styles.navIcon}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Link href="/">
          <img src="/care-logo.png" alt="Logo" className={styles.mainLogo} />
        </Link>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuList?.map((item) => (
            <ListItem key={item?.key} disablePadding>
              <ListItemButton>
                <div className={styles.menuListDisplay}>
                  <Link className={styles.navLinks} href={`/${item?.key}`}>
                    {item?.text}
                  </Link>
                  {(item?.text === "Partners" ||
                    item?.text === "Warranty" ||
                    item?.text === "Products") && <AddIcon />}
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <ul className={open ? styles.navMenuActive : styles.navMenu}>
            <li className={styles.navItem}>
              <Link className={`${styles.navLinks} ${styles.navLinksRed}`} href="/">
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={`${styles.navLinks} ${styles.navLinksRed}`} href="/aboutus">
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navDropdown}>
                <Link className={`${styles.navLinks} ${styles.navLinksRed}`} href="/Products">
                  Products
                </Link>
                {productArray?.length > 0 && (
                  <div className={styles.dropdownContent}>
                    {productArray?.map((product) => (
                      <Link
                        className={styles.navLinksDropDown}
                        key={product?.productKey}
                        href={`/${product.productKey}`}
                      >
                        {product?.productNamme}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navDropdown}>
                <Link className={`${styles.navLinks} ${styles.navLinksRed}`} href="/BecomeaPartner">
                  Partners
                </Link>
                {partnerArray?.length > 0 && (
                  <div className={styles.dropdownContent}>
                    {partnerArray?.map((partner) => (
                      <Link
                        key={partner?.partnerKey}
                        href={`/${partner.partnerKey}`}
                        className={styles.navLinksDropDown}
                      >
                        {partner?.partnerNamme}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navDropdown}>
                <Link className={`${styles.navLinks} ${styles.navLinksRed}`} href="/WarrantyRegistration" >
                  Warranty
                </Link>
                {warrantyArray?.length > 0 && (
                  <div className={styles.dropdownContent}>
                    {warrantyArray?.map((warranty) => (
                      <div
                        key={warranty?.warrantyKey}
                        onClick={() => router.push(`/${warranty?.warrantyKey}`)}
                        className={styles.navLinksDropDown}
                      >
                        <div className={styles.warrantyArrow}>
                          {warranty?.warrantyNamme}
                          {warranty?.warrantyList &&
                            warranty?.warrantyList.length > 0 && (
                              <IoIosArrowForward style={{ marginTop: "3%" }} />
                            )}
                        </div>
                        <div
                          className={
                            warranty?.warrantyList.length <= 0
                              ? styles.hideNested
                              : styles.nesteddropdowns
                          }
                        >
                          {warranty?.warrantyList?.map((element) => (
                            <Link
                              key={element?.key}
                              href={`/${element?.key}`}
                              className={styles.insidenesteddropdowns}
                            >
                              {element?.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li className={styles.navItem}>
              <Link className={`${styles.navLinks} ${styles.navLinksRed}`} href="/Downloads" >
                Downloads
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={`${styles.navLinks} ${styles.navLinksRed}`} href="/ContactUs" >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
