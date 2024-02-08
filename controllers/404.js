exports.get404Page = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    path: "/404",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
