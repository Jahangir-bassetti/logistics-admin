import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/images/logo.svg";
import { CSSTransition } from "react-transition-group";
import { Link, useLocation } from "react-router-dom";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarProps, SidebarItem } from "../../interface/SidebarInterface";

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapseSideMenu, setCollapseSideMenu] = useState<number>(0);
  const [currentPath, setCurrentPath] = useState<string>("pagelist");
  const dashboardRef = useRef<HTMLSpanElement>(null);
  const accountRef = useRef<HTMLSpanElement>(null);
  const submenu = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const sideBarArray: SidebarItem[] = [
    {
      id: 0,
      title: "Dashboard",
      link: "/dashboard",
      active: "/dashboard",
      children: [],
      icon: "gauge",
    },
    {
      id: 1,
      title: "Account Settings",
      link: "#",
      active: "/account-settings",
      icon: "gear",
      children: [
        {
          id: 1,
          title: "Page List",
          link: "/account-settings/pagelist",
          active: "/account-settings",
          icon: "file",
        },
        {
          id: 2,
          title: "Add Page",
          link: "/account-settings/add-page",
          active: "account-settings",
          icon: "plus",
        },
      ],
    },
    {
      id: 2,
      title: "Consignments",
      link: "/consignments",
      active: "/consignments",
      children: [],
      icon: "box",
    },
    {
      id: 3,
      title: "User",
      link: "#",
      active: "/user",
      icon: "user",
      children: [
        {
          id: 1,
          title: "Employee",
          link: "/user/employee",
          active: "/user",
          icon: "users",
        },
        {
          id: 2,
          title: "Customer",
          link: "/user/customer",
          active: "/user",
          icon: "person",
        },
        {
          id: 3,
          title: "Driver",
          link: "/user/driver",
          active: "/user",
          icon: "id-card",
        },
      ],
    },
    {
      id: 4,
      title: "Vehicles",
      link: "/vehicle",
      active: "/vehicle",
      children: [],
      icon: "truck",
    },
    {
      id: 5,
      title: "Trips",
      link: "/trip",
      active: "/trip",
      children: [],
      icon: "map-location-dot",
    },
    {
      id: 6,
      title: "Bills",
      link: "/bill",
      active: "/bill",
      children: [],
      icon: "file-invoice-dollar",
    },
    {
      id: 7,
      title: "Inventary",
      link: "/warehouse",
      active: "/warehouse",
      children: [],
      icon: "warehouse",
    },
    {
      id: 8,
      title: "Report",
      link: "/report",
      active: "/report",
      children: [],
      icon: "bug",
    },
  ];

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleSidebarMenus = (sideMenu: number) => {
    if (collapseSideMenu !== sideMenu) setCollapseSideMenu(sideMenu);
    else setCollapseSideMenu(0);
  };

  return (
    <div className="sidebar">
      <div
        className="sidebar-wrapper"
        style={{ width: props.isOpen.currentValue ? "15.5rem" : "5rem" }}
        onMouseEnter={() =>
          !props.isOpen.isBtnOpen
            ? props.setSideBarOpen({
              isBtnOpen: false,
              currentValue: true,
            })
            : null
        }
        onMouseLeave={() =>
          !props.isOpen.isBtnOpen
            ? props.setSideBarOpen({
              isBtnOpen: false,
              currentValue: false,
            })
            : null
        }
      >
        <div className="sidebar-menu">
          <div className="logo-waper">
            <img
              src={logo}
              className={
                props.isOpen.currentValue ? "logo-img" : "logo-img-collapsed"
              }
              alt=""
            />
          </div>
          <div style={{ maxHeight: "90vh", overflow: "auto" }}>
            <ul className="sidebar-list">
              {sideBarArray.map((item: any, index) => {
                return item.children.length < 1 ? (
                  <Link to={item.link} key={index}>
                    <li
                      onClick={() => handleSidebarMenus(item.id)}
                      className={
                        currentPath.includes(item.active)
                          ? "sidebar-btn-active"
                          : "sidebar-btn"
                      }
                    >
                      <i>
                        <FontAwesomeIcon className="icon" icon={item.icon} />
                      </i>
                      <CSSTransition
                        nodeRef={dashboardRef}
                        in={props.isOpen.currentValue}
                        unmountOnExit
                        timeout={200}
                        classNames="my-node"
                      >
                        <span ref={dashboardRef} className="list-name">
                          {item.title}
                        </span>
                      </CSSTransition>
                    </li>
                  </Link>
                ) : (
                  <div key={index}>
                    <li
                      onClick={() => handleSidebarMenus(item.id)}
                      className={
                        currentPath === item.active ||
                          currentPath.includes(item.active)
                          ? "sidebar-btn-active"
                          : "sidebar-btn"
                      }
                    >
                      <i>
                        <FontAwesomeIcon icon={item.icon} />{" "}
                      </i>
                      <CSSTransition
                        nodeRef={accountRef}
                        in={props.isOpen.currentValue}
                        unmountOnExit
                        timeout={200}
                        classNames="my-node"
                      >
                        <span className="list-name" ref={accountRef}>
                          {item.title}
                        </span>
                      </CSSTransition>
                      <CSSTransition
                        nodeRef={accountRef}
                        in={props.isOpen.currentValue}
                        unmountOnExit
                        timeout={200}
                        classNames="my-node"
                      >
                        <span className="collapsable-menu-btn">
                          {" "}
                          <FontAwesomeIcon
                            icon={faAngleLeft}
                            className={
                              collapseSideMenu === index ? "active-submenu" : ""
                            }
                            style={{ transition: "0.4s ease-in-out" }}
                          />
                        </span>
                      </CSSTransition>
                    </li>
                    <CSSTransition
                      in={collapseSideMenu === index}
                      nodeRef={submenu}
                      timeout={500}
                      classNames="alert"
                      unmountOnExit
                    >
                      <div ref={submenu} className="collapsed-submenu">
                        {item.children.map((obj: any, index: any) => {
                          return (
                            <Link to={obj.link} key={index}>
                              {" "}
                              <li
                                className={
                                  currentPath === obj.link
                                    ? "submenu-list-item-active"
                                    : "submenu-list-item"
                                }
                              >
                                <i>
                                  <FontAwesomeIcon
                                    icon={obj.icon}
                                    color={
                                      currentPath === obj.link ? "white" : ""
                                    }
                                  />
                                </i>
                                {props.isOpen.currentValue ? (
                                  <span className="sub-list-label">
                                    {obj.title}
                                  </span>
                                ) : null}
                              </li>
                            </Link>
                          );
                        })}
                      </div>
                    </CSSTransition>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
