const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

//Tabs Menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  console.log(e.target);
  tabs.forEach((tab) =>
    //Deactivate all tabs
    tab.children[0].classList.remove(
      "border-SoftRed",
      "border-b-4",
      "md:border-b-0"
    )
  );
  //Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  //Activate a new tab and panel based on the target
  e.target.classList.add("border-SoftRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  // console.log(classString);
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}
