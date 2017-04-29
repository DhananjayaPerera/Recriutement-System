using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Recruitment_Support_System.Startup))]
namespace Recruitment_Support_System
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
