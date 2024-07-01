using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly DataContext _context;

        public TestController(DataContext context)
        {
            _context = context;
        }
        [HttpGet("testconnection")]
        public async Task<IActionResult> TestConnection()
        {
            try
            {
                // Basit bir bağlantı testi için veritabanına bir sorgu gönder
                var canConnect = await _context.Database.CanConnectAsync();
                if (canConnect)
                {
                    return Ok("Veritabanına bağlantı başarılı!");
                }
                else
                {
                    return BadRequest("Veritabanına bağlantı sağlanamadı.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Bağlantı hatası: {ex.Message}");
            }
        }
    }
}
