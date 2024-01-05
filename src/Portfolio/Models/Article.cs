namespace Portfolio.Models;

public class Article
{
    public string Title { get; set; } = string.Empty;
    public IEnumerable<string> Authors { get; set; } = Array.Empty<string>();
    public int Year { get; set; }
    public string Journal { get; set; } = string.Empty;
    public string DOI {  get; set; } = string.Empty;
}
