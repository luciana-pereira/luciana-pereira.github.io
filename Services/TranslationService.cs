using System.Text.Json;

public class TranslationService
{
    public Dictionary<string, string> Translations { get; set; }

    public async Task Load(string lang)
    {
        var json = await File.ReadAllTextAsync($"wwwroot/i18n/{lang}.json");
        Translations = JsonSerializer.Deserialize<Dictionary<string, string>>(json);
    }

    public string T(string key) => Translations.ContainsKey(key) ? Translations[key] : key;
}