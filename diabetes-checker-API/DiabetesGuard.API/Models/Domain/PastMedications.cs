namespace DiabetesGuard.API.Models.Domain
{
    public class PastMedications
    {
        public Guid Id { get; set; }
        public Guid PatientId { get; set; }
        public string BrandName { get; set; }
        public string Substances { get; set; }
        public string Route { get; set;}
        public int Frequency { get; set; }
        public DateTime StartDate { get; set;}
        public DateTime EndDate { get; set;}


    }
}
