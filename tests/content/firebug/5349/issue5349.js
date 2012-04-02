function runTest()
{
    FBTest.sysout("issue5349.START");

    FBTest.openNewTab(basePath + "firebug/5349/issue5349.html", function(win)
    {
        var target = win.document.getElementById("selectbox");
        FBTest.progress("target " + target);
        FBTest.executeContextMenuCommand(target, "menu_firebugInspect", function()
        {
            FBTest.testDone("issue5349.DONE");
        });
    });
}
