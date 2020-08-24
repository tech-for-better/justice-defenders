import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";

const BreadCrumbs = ({ crumbs }) => {
  const LinkRenderer = (crumbs) => {
    return crumbs.map((crumb) => {
      return (
        <Link
          style={{ textTransform: "capitalize" }}
          key={crumb.href}
          color={
            crumb.title === crumbs[crumbs.length - 1].title
              ? "textPrimary"
              : "inherit"
          }
          href={`/#${crumb.href}`}>
          {crumb.title ? crumb.title : ""}
        </Link>
      );
    });
  };

  return (
    <Breadcrumbs data-cy="breadcrumbs" separator="›" aria-label="breadcrumb">
      {LinkRenderer(crumbs)}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
