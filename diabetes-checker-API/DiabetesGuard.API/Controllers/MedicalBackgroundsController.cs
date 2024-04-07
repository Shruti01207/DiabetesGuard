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
    public class MedicalBackgroundsController : ControllerBase
    {
        private readonly DiabetesGuardDbContext _context;

        public MedicalBackgroundsController(DiabetesGuardDbContext context)
        {
            _context = context;
        }

        // GET: api/MedicalBackgrounds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicalBackground>>> GetMedicalBackgrounds()
        {
            return await _context.MedicalBackgrounds.ToListAsync();
        }

        // GET: api/MedicalBackgrounds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicalBackground>> GetMedicalBackground(Guid id)
        {
            var medicalBackground = await _context.MedicalBackgrounds.FindAsync(id);

            if (medicalBackground == null)
            {
                return NotFound();
            }

            return medicalBackground;
        }

        [HttpGet("patientId/{id}")]
        public async Task<ActionResult<MedicalBackground>> GetMedicalBackgroundByPatientId(Guid id)
        {
            var medicalBackground = await _context.MedicalBackgrounds.FirstOrDefaultAsync(m => m.PatientId == id);

            if (medicalBackground == null)
            {
                return NotFound();
            }

            return medicalBackground;
        }
        // PUT: api/MedicalBackgrounds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicalBackground(Guid id, MedicalBackground medicalBackground)
        {
            if (id != medicalBackground.Id)
            {
                return BadRequest();
            }

            _context.Entry(medicalBackground).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicalBackgroundExists(id))
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

        // POST: api/MedicalBackgrounds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MedicalBackground>> PostMedicalBackground(MedicalBackground medicalBackground)
        {
            _context.MedicalBackgrounds.Add(medicalBackground);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMedicalBackground", new { id = medicalBackground.Id }, medicalBackground);
        }

        // DELETE: api/MedicalBackgrounds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicalBackground(Guid id)
        {
            var medicalBackground = await _context.MedicalBackgrounds.FindAsync(id);
            if (medicalBackground == null)
            {
                return NotFound();
            }

            _context.MedicalBackgrounds.Remove(medicalBackground);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MedicalBackgroundExists(Guid id)
        {
            return _context.MedicalBackgrounds.Any(e => e.Id == id);
        }
    }
}
