namespace site.Models;

public class Project
{
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public string Image { get; set; } = "";
    public string? RepositoryUrl { get; set; }
    public string? LiveUrl { get; set; }
    public List<string> Technologies { get; set; } = new();
    public bool IsFeatured { get; set; }
    public string Status { get; set; } = "Completed"; 
    public DateTime? CreatedAt { get; set; }
}