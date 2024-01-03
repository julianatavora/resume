using Microsoft.AspNetCore.Components.Routing;

namespace Portfolio.Models;

public class NavigationBarItem
{
    /// <summary>
    /// Gets or sets the title of the navigation bar item.
    /// </summary>
    public string Title { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the link of the navigation bar item.
    /// </summary>
    public string Hyperlink { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the URl matching behaviour.
    /// </summary>
    public NavLinkMatch Match { get; set; } = NavLinkMatch.All;
}

