import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
import { Grid, Typography } from "@mui/material";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const drawerWidth = 240;

function NavBar() {
  const [submenuVisibility, setSubmenuVisibility] = React.useState({});
  const [submenuList, setSubmenuList] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const productArray = [
    {
      key: "Products",
      name: "MINI SPLIT INVERTER HEAT PUMPS",
    },
    { key: "multi-zone", name: "MULTIZONE INVERTER HEAT PUMPS" },
    {
      key: "air-handler",
      name: "AIR HANDLER UNIT INVERTER HEAT PUMPS",
    },
    { key: "SpareParts", name: "SPARE PARTS" },
  ];

  const partnerArray = [
    {
      key: "BecomeaPartner",
      name: "Become A Partner",
    },
    {
      key: "PartnerCenter",
      name: "Partner Center",
    },
  ];

  const warrantyArray = [
    {
      key: "MiniSplitIndor",
      name: "Mini Split Inverter Heat Pumps",
      warrantyList: [
        { name: "Mini Split InDoor", key: "MiniSplitIndor" },
        { name: "Mini Split OutDoor", key: "MiniSplitoutdor" },
      ],
    },
    {
      key: "MiniSplitIndor",
      name: "Multi-Zone Inverter Heat Pumps",
      warrantyList: [{ name: "Multi Zone OutDoor", key: "MiniSplitoutdor" }],
    },
    {
      key: "Air-Handler",
      name: "Air Handler Unit Inverter Heat Pumps",
      warrantyList: [
        { name: "Air Handler InDoor", key: "MiniSplitIndor" },
        { name: "Air Handler OutDoor", key: "MiniSplitoutdor" },
      ],
    },
    {
      key: "WarrantyRegistration",
      name: "Warranty Registration",
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
    { text: "Products", key: "Products", subList: productArray },
    { text: "Partners", key: "BecomeaPartner", subList: partnerArray },
    { text: "Warranty", key: "warrantyRegistration", subList: warrantyArray },
    { text: "Downloads", key: "downloads" },
    { text: "Contact Us", key: "contact" },
  ];

  const handleSubmenuToggle = (item) => {
    console.log(item?.subList)
    setSubmenuList([...item?.subList]);
    setSubmenuVisibility((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
      [item.text]: !prev[item.text],
    }));
  };

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
                <div className={styles.subMenuList}>
                  <div className={styles.menuListDisplay}>
                    <Link className={styles.navLinks} href={`/${item?.key}`}>
                      {item?.text}
                    </Link>
                    {(item?.text === "Partners" ||
                      item?.text === "Warranty" ||
                      item?.text === "Products") &&
                      <IconButton sx={{ position: 'absolute', right: 3 }} onClick={() => handleSubmenuToggle(item)}>
                        {submenuVisibility[item?.text] ?  <RemoveIcon /> : <AddIcon />}
                      </IconButton>
                    }
                  </div>
                  {submenuVisibility[item?.text] && (
                    <div>
                      {submenuList?.map((item) => (
                        <Grid href={`/${item?.key}`} onClick={()=> router.push(`/${item?.key}`)} sx={{ display: 'flex', ml: '0.7rem', pt: '10px' }}>
                          <MdOutlineKeyboardArrowRight />
                          <Typography sx={{ fontSize: '10px', width: '170px', }}>{item?.name}</Typography>
                        </Grid>
                      ))}
                    </div>
                  )}

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
                        key={product?.key}
                        href={`/${product.key}`}
                      >
                        {product?.name}
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
                        key={partner?.key}
                        href={`/${partner.key}`}
                        className={styles.navLinksDropDown}
                      >
                        {partner?.name}
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
                    {warrantyArray?.map((warranty, index) => (
                      <div
                        key={warranty?.key + index}
                        onClick={() => router.push(`/${warranty?.key}`)}
                        className={styles.navLinksDropDown}
                      >
                        <div className={styles.warrantyArrow}>
                          {warranty?.name}
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
                          {warranty?.warrantyList?.map((element, index) => (
                            <Link
                              key={element?.key + index}
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
