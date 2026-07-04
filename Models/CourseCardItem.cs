namespace site.Models;

public sealed record CourseCardItem(
    string Title,
    string Description,
    string Type,
    string Difficulty,
    string Duration,
    string Format,
    string Thumbnail,
    string Url,
    string EmbedUrl,
    bool IsFeatured,
    string Badge,
    int Views
);
