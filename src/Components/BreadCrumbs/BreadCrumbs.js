import React from "react";
import { Breadcrumbs, Typography } from "@material-ui/core";

import { BreadcrumbLink } from "./Breadcrumbs.style";

const BreadCrumbs = ({ crumbs }) => {
  const LinkRenderer = (crumbs) => {
    return crumbs.map((crumb) => {
      return crumb.title === crumbs[crumbs.length - 1].title ? (
        <Typography
          key={crumb.title}
          style={{ textTransform: "capitalize" }}
          color="textPrimary">
          {crumb.title}
        </Typography>
      ) : (
        <BreadcrumbLink key={crumb.title} to={`${crumb.href}`}>
          {crumb.title ? crumb.title : ""}
        </BreadcrumbLink>
      );
    });
  };

  return (
    <Breadcrumbs
      style={{
        position: "fixed",
        backgroundColor: "#fbfaf8",
        top: "0",
        padding: "1rem 0",
        width: "100%",
        zIndex: "99",
      }}
      data-cy="breadcrumbs"
      separator="›"
      aria-label="breadcrumb">
      {LinkRenderer(crumbs)}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
