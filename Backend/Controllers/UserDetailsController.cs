using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web.Routing;
using System.Web.UI.WebControls;
using Connect.Models;
using Microsoft.Ajax.Utilities;

namespace Connect.Controllers
{
    public class UserDetailsController : ApiController
    {
        private PSEntities4 db = new PSEntities4();

        // GET: api/UserDetails
        public IQueryable<UserDetail> GetUserDetails() {
            return db.UserDetails;
        }

        // GET: api/UserDetails/5
        [ResponseType(typeof(UserDetail))]
        public async Task<IHttpActionResult> GetUserDetail(int id) {
            UserDetail userDetail = await db.UserDetails.FindAsync(id);
            if (userDetail == null)
            {
                return NotFound();
            }

            return Ok(userDetail);
        }

        // POST: api/signin
        [HttpPost]
        [Route("api/signin")]
        [ResponseType(typeof(int))]
        public int Signin(Auth auth) {
            foreach(var user in db.UserDetails) {
                if(user.email.Equals(auth.email, StringComparison.OrdinalIgnoreCase) && user.password == auth.password) {
                    return user.userID;
                }
            }
            return 0;
        }

        //GET: api/getUserNameFromId
        [HttpPost]
        [Route("api/getUserNameFromId")]
      
        public IHttpActionResult getUserFromId( UserDetail userd ) {    
            
            if(userd == null) return NotFound();

            foreach (var user in db.UserDetails) {
                if (user.userID == userd.userID) {
                    return Ok(user.userName);
                }
            }
            return NotFound();
            
        }

        // PUT: api/UserDetails
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUserDetail(int id, UserDetail userDetail) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if (id != userDetail.userID)
            {
                return BadRequest();
            }

            db.Entry(userDetail).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UserDetails
        [ResponseType(typeof(int))]
        public async Task<IHttpActionResult> PostUserDetail(UserDetail userDetail) {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserDetails.Add(userDetail);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = userDetail.userID }, userDetail.userID);
        }

        // DELETE: api/UserDetails/5
        [ResponseType(typeof(UserDetail))]
        public async Task<IHttpActionResult> DeleteUserDetail(int id) {
            UserDetail userDetail = await db.UserDetails.FindAsync(id);
            if (userDetail == null)
            {
                return NotFound();
            }

            db.UserDetails.Remove(userDetail);
            await db.SaveChangesAsync();

            return Ok(userDetail);
        }

        protected override void Dispose(bool disposing) {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserDetailExists(int id) {
            return db.UserDetails.Count(e => e.userID == id) > 0;
        }
    }
}