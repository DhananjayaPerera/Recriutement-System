using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Recruitment_Support_System.Models;

namespace Recruitment_Support_System.Controllers
{
    public class EduQualificationController : Controller
    {
        private EduQualificationDbContext db = new EduQualificationDbContext();

        // GET: EduQualification
        public ActionResult Index()
        {
            return View(db.EduQualifications.ToList());
        }

        // GET: EduQualification/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EduQualification eduQualification = db.EduQualifications.Find(id);
            if (eduQualification == null)
            {
                return HttpNotFound();
            }
            return View(eduQualification);
        }

        // GET: EduQualification/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: EduQualification/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "EduQualificationId,Type,Title,Institute,Class")] EduQualification eduQualification)
        {
            if (ModelState.IsValid)
            {
                db.EduQualifications.Add(eduQualification);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(eduQualification);
        }

        // GET: EduQualification/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EduQualification eduQualification = db.EduQualifications.Find(id);
            if (eduQualification == null)
            {
                return HttpNotFound();
            }
            return View(eduQualification);
        }

        // POST: EduQualification/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "EduQualificationId,Type,Title,Institute,Class")] EduQualification eduQualification)
        {
            if (ModelState.IsValid)
            {
                db.Entry(eduQualification).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(eduQualification);
        }

        // GET: EduQualification/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EduQualification eduQualification = db.EduQualifications.Find(id);
            if (eduQualification == null)
            {
                return HttpNotFound();
            }
            return View(eduQualification);
        }

        // POST: EduQualification/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            EduQualification eduQualification = db.EduQualifications.Find(id);
            db.EduQualifications.Remove(eduQualification);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
