using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Recruitment_Support_System.Models
{
    public class Vacancy
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VacancyId { get; set; }
        public string Title { get; set; }
        public string Scope { get; set; }
        public string Responsibilities { get; set; }
        public string Qualifications { get; set; }
        public string Age { get; set; }
        public string Salary { get; set; }
        public string Selection { get; set; }
    }

    public class VacancyDbContext : DbContext
    {
        public VacancyDbContext() : base("DefaultConnection")
        {

        }

        public System.Data.Entity.DbSet<Recruitment_Support_System.Models.Vacancy> Vacancies { get; set; }
    }

}