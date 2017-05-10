using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Recruitment_Support_System.Models
{
    public class Applicant
    {
        public int ApplicantId { get; set; }
        public string Title { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string DOB { get; set; }
        public string Civil_Status { get; set; }
    }

    public class ApplicantDbContext : DbContext
    {
        public ApplicantDbContext() : base("DefaultConnection")
        {

        }

        public System.Data.Entity.DbSet<Recruitment_Support_System.Models.Applicant> Applicants { get; set; }
    }
}