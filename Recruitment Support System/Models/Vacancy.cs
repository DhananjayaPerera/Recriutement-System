using System.Data.Entity;

namespace Recruitment_Support_System.Models
{
    public class Vacancy
    {
        public int VacancyId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Responsibilities { get; set; }
        public string Qualifications { get; set; }
    }

    public class VacancyDbContext : DbContext
    {
        public VacancyDbContext() : base("DefaultConnection")
        {

        }

        public System.Data.Entity.DbSet<Recruitment_Support_System.Models.Vacancy> Vacancies { get; set; }
    }

}