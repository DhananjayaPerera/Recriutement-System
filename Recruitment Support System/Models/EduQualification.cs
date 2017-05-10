using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Recruitment_Support_System.Models
{
    public class EduQualification
    {
        public int EduQualificationId { get; set; }
        public string Type { get; set; }
        public string Title { get; set; }
        public string Institute { get; set; }
        public string Class { get; set; }
    }

    public class EduQualificationDbContext : DbContext
    {
        public EduQualificationDbContext() : base("DefaultConnection")
        {

        }

        public System.Data.Entity.DbSet<Recruitment_Support_System.Models.EduQualification> EduQualifications { get; set; }
    }
}