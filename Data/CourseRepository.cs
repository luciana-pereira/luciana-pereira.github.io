using site.Models;

namespace site.Data;

public static class CourseRepository
{
    public static bool IsPlaylistPublished { get; } = false;

    public static List<CourseCardItem> Courses { get; } = new()
    {
        new(
            "AZ-900 Foundations",
            "Fundamentos de cloud Azure com foco em conceitos, servicos e arquitetura de referencia.",
            "Curso",
            "Iniciante",
            "2h 10m",
            "Serie guiada",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&q=80",
            "https://www.youtube.com/@LucianaPereiraDev",
            "https://www.youtube-nocookie.com/embed/HQ3w6Muwx38",
            true,
            "Mais procurado",
            12450
        ),
        new(
            "AZ-204 Developer",
            "Aplicacoes cloud-native com App Service, Functions, storage e seguranca para devs.",
            "Formação",
            "Intermediario",
            "3h 40m",
            "Trilha completa",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1280&q=80",
            "https://www.youtube.com/@LucianaPereiraDev",
            "https://www.youtube-nocookie.com/embed/7S_tz1z_5bA",
            true,
            "Atualizado",
            8420
        ),
        new(
            "AZ-305 Architect",
            "Decisoes de arquitetura, resiliencia e custos para desenhar solucoes escalaveis na Azure.",
            "Curso",
            "Avancado",
            "4h 20m",
            "Masterclass",
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1280&q=80",
            "https://www.youtube.com/@LucianaPereiraDev",
            "https://www.youtube-nocookie.com/embed/9f8s4J6NFWY",
            false,
            string.Empty,
            6200
        ),
        new(
            "System Design",
            "Modelagem de sistemas distribuidos, trade-offs e padroes para entrevistas e projetos reais.",
            "Curso",
            "Intermediario",
            "2h 50m",
            "Aulas praticas",
            "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1280&q=80",
            "https://www.youtube.com/@LucianaPereiraDev",
            "https://www.youtube-nocookie.com/embed/wd4x4Sx3dYQ",
            false,
            string.Empty,
            4100
        ),
        new(
            "C# Backend",
            "APIs robustas com .NET, boas praticas de dominio, testes e observabilidade para producao.",
            "Curso",
            "Intermediario",
            "3h 00m",
            "Hands-on",
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1280&q=80",
            "https://www.youtube.com/@LucianaPereiraDev",
            "https://www.youtube-nocookie.com/embed/K1iu1kXkVoA",
            false,
            string.Empty,
            2980
        )
    };
}
