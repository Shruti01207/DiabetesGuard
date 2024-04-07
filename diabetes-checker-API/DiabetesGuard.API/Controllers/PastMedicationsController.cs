using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DiabetesGuard.API.Data;
using DiabetesGuard.API.Models.Domain;

namespace DiabetesGuard.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PastMedicationsController : ControllerBase
    {
        private readonly DiabetesGuardDbContext _context;

        public PastMedicationsController(DiabetesGuardDbContext context)
        {
            _context = context;
        }

        // GET: api/PastMedications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PastMedications>>> GetPastMedications()
        {
            return await _context.PastMedications.ToListAsync();
        }

        // GET: api/PastMedications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PastMedications>> GetPastMedications(Guid id)
        {
            var pastMedications = await _context.PastMedications.FindAsync(id);

            if (pastMedications == null)
            {
                return NotFound();
            }

            return pastMedications;
        }

        [HttpGet("{patientId}/patientId")]
        public async Task<ActionResult<List<PastMedications>>> GetPastMedicationsByPatientId(Guid patientId)
        {
            var pastMedications = await _context.PastMedications.Where(prescription=>prescription.PatientId == patientId).ToListAsync();
              //  FindAsync(patientId);

            if (pastMedications == null)
            {
                return NotFound();
            }

            return pastMedications;
        }

        // PUT: api/PastMedications/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPastMedications(Guid id, PastMedications pastMedications)
        {
            if (id != pastMedications.Id)
            {
                return BadRequest();
            }

            _context.Entry(pastMedications).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PastMedicationsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PastMedications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PastMedications>> PostPastMedications(PastMedications pastMedications)
        {
            _context.PastMedications.Add(pastMedications);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPastMedications", new { id = pastMedications.Id }, pastMedications);
        }

        // DELETE: api/PastMedications/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePastMedications(Guid id)
        {
            var pastMedications = await _context.PastMedications.FindAsync(id);
            if (pastMedications == null)
            {
                return NotFound();
            }

            _context.PastMedications.Remove(pastMedications);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PastMedicationsExists(Guid id)
        {
            return _context.PastMedications.Any(e => e.Id == id);
        }
    }
}
