using Microsoft.JSInterop;

namespace site.Services;

public class ThemeService
{
    private readonly IJSRuntime _js;

    public bool IsDarkMode { get; private set; }

    public event Action? OnThemeChanged;

    public ThemeService(IJSRuntime js)
    {
        _js = js;
    }

    public async Task InitializeAsync()
    {
        var theme = await _js.InvokeAsync<string>("theme.load");
        IsDarkMode = theme == "dark";

        OnThemeChanged?.Invoke();
    }

    public async Task ToggleAsync()
    {
        var theme = await _js.InvokeAsync<string>("theme.toggle");
        IsDarkMode = theme == "dark";

        OnThemeChanged?.Invoke();
    }
}