namespace site.Models;

public sealed class TechnologyCardItem
{
    public string Name { get; set; } = string.Empty;

    public string Icon { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public string Level { get; set; } = string.Empty;

    public string Experience { get; set; } = string.Empty;

    public int IconWidth { get; set; } = 26;
}